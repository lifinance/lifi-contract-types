import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NEARIntentsFacet, NEARIntentsFacetInterface } from "../NEARIntentsFacet";
type NEARIntentsFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NEARIntentsFacet__factory extends ContractFactory {
    constructor(...args: NEARIntentsFacetConstructorParams);
    deploy(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NEARIntentsFacet>;
    getDeployTransaction(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NEARIntentsFacet;
    connect(signer: Signer): NEARIntentsFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051612370380380612370833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b6080516122cc6100a45f395f610adf01526122cc5ff3fe608060405260043610610033575f3560e01c8063bb2221a514610037578063cc67a1aa1461004c578063e54bd037146100ad575b5f5ffd5b61004a610045366004611bd1565b6100c0565b005b348015610057575f5ffd5b50610099610066366004611c3b565b5f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e602052604090205460ff1690565b604051901515815260200160405180910390f35b61004a6100bb366004611e71565b61044b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161013b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561014883611f37565b825f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6040808401355f9081526020839052205490915060ff16156101b9576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81606001354211156101f7576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561023657506020820135155b1561026d576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6102793447611f42565b905061028488611f37565b60a081015173ffffffffffffffffffffffffffffffffffffffff166102d5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610312576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361034f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035889611f37565b80610100015115610395576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039e8a611f37565b806101200151156103db576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ed6103e78c611f37565b8b6107e7565b61040a61040060a08d0160808e01611f7a565b8c60c00135610b6a565b61041c6104168c611f37565b8b610c1e565b50479150508181111561043d5761043d5f846104388585611f42565b610cad565b50505f909455505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104c6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815584825f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6040808401355f9081526020839052205490915060ff161561053c576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816060013542111561057a576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480156105b957506020820135155b156105f0576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6105fc3447611f42565b90508980610100015161063b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a80610120015115610679576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b61069c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106d3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610710576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361074d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107578d8b6107e7565b5f61076c8e5f01518f60c001518f8f33610cdd565b90508d60c001518111156107b0575f8e60c001518261078b9190611f42565b90506107ae8f608001518d60a00160208101906107a89190611f7a565b83610cad565b505b6107ba8e8c610c1e565b504792505050818111156107d7576107d75f846104388585611f42565b50505f9094555050505050505050565b60a08201515f9073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11461083e5760a083015173ffffffffffffffffffffffffffffffffffffffff16610844565b81602001355b835160c08501519192505f917f26e3f312476209e792e713eef13bd95c5da5292aba26e299c7d8e7c647d7903e9190846108816020880188611f7a565b60e0808a01516080808c015160408051602081019a909a52898101989098526060898101979097528882019590955273ffffffffffffffffffffffffffffffffffffffff93841660a089015260c088019190915291909216918501919091529086013561010084015290850135610120830152840135610140820152610160016040516020818303038152906040528051906020012090505f610a1d604080518082018252601881527f4c492e4649204e45415220496e74656e7473204661636574000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fdf98a75ee2bb051a05361ac569745cad98c226712c281987cdb39642864489ae818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090505f610adb82610aa260c0880188611f9a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610e1f92505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b62576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b805f03610ba3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bfc5780341015610bf8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610bf873ffffffffffffffffffffffffffffffffffffffff8316333084610ec3565b5f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6040808401355f908152602083815291902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556080850151919250610c9e9190610c9490850185611f7a565b8560c00151610cad565b610ca88383610f1b565b505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cd257610ca8828261105e565b610ca88383836110cb565b5f82808203610d18576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610d26600185611f42565b818110610d3557610d35612002565b9050602002810190610d47919061202f565b610d58906080810190606001611f7a565b90505f610d6482611139565b905073ffffffffffffffffffffffffffffffffffffffff8216610d8e57610d8b3482611f42565b90505b5f610d998888611183565b9050610da5888861128d565b610db28a898989856112f9565b5f82610dbd85611139565b610dc79190611f42565b905089811015610e11576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b604051600190835f5260208301516040526040835103610e7357604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610e97565b6041835103610e935760608301515f1a6020526040830151606052610e97565b5f91505b6020600160805f855afa5191503d610eb657638baa579f5f526004601cfd5b5f60605260405292915050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f0e57637939f4245f526004601cfd5b5f60605260405250505050565b610f286020820182611f7a565b8251608084015160c08501516040805173ffffffffffffffffffffffffffffffffffffffff938416815260208101929092526060808701358383015294909216939185013592917fabfaa867fe89bacdf772b7b4aa1700c6157ca41c551d443b5d81144aad19f754910160405180910390a47311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036110235760e0820151825160405160208481013582527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c910160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161105291906120b7565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff82166110ab576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bf873ffffffffffffffffffffffffffffffffffffffff8316826114bb565b73ffffffffffffffffffffffffffffffffffffffff8216611118576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ca873ffffffffffffffffffffffffffffffffffffffff841683836114d4565b5f73ffffffffffffffffffffffffffffffffffffffff82161561117b5761117673ffffffffffffffffffffffffffffffffffffffff83163061151d565b61117d565b475b92915050565b6060815f8167ffffffffffffffff8111156111a0576111a0611c52565b6040519080825280602002602001820160405280156111c9578160200160208202803683370190505b5090505f5f5b83811015611282578686828181106111e9576111e9612002565b90506020028101906111fb919061202f565b61120c906080810190606001611f7a565b915061121782611139565b83828151811061122957611229612002565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661127a573483828151811061126257611262612002565b602002602001018181516112769190611f42565b9052505b6001016111cf565b509095945050505050565b5f5b81811015610ca857368383838181106112aa576112aa612002565b90506020028101906112bc919061202f565b90506112ce60e0820160c083016121ca565b156112f0576112f06112e66060830160408401611f7a565b8260800135610b6a565b5060010161128f565b83838383825f5b818110156114a157368a8a8381811061131b5761131b612002565b905060200281019061132d919061202f565b905061135c6113426060830160408401611f7a565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113be57506113be6113756040830160208401611f7a565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113d557506113d56113756020830183611f7a565b801561145857506114586113ec60a0830183611f9a565b6113fa916004915f916121e3565b6114039161220a565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61148e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114988c82611550565b50600101611300565b50506114b0848484845f6117c3565b505050505050505050565b5f385f3884865af1610bf85763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611514576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6115686115606020830183611f7a565b6017903b1190565b61159e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115dd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6115f16113426060850160408601611f7a565b6115fb575f611601565b82608001355b90505f61161c6116176080860160608701611f7a565b611139565b9050815f03611652576116526116386060860160408701611f7a565b6116486040870160208801611f7a565b86608001356119da565b5f806116616020870187611f7a565b73ffffffffffffffffffffffffffffffffffffffff168461168560a0890189611f9a565b604051611693929190612270565b5f6040518083038185875af1925050503d805f81146116cd576040519150601f19603f3d011682016040523d82523d5f602084013e6116d2565b606091505b5091509150816116e5576116e581611a06565b5f6116f96116176080890160608a01611f7a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861172a60208a018a611f7a565b61173a60608b0160408c01611f7a565b61174a60808c0160608d01611f7a565b8b6080013589871161175c5786611766565b6117668a88611f42565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826117d2600182611f42565b8181106117e1576117e1612002565b90506020028101906117f3919061202f565b611804906080810190606001611f7a565b90505f5f5f5f5f5f5f5b888110156119ca5761182160018a611f42565b81108015611830575088600114155b1561190b578d8d8281811061184757611847612002565b9050602002810190611859919061202f565b61186a906080810190606001611f7a565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461190b578a81815181106118b1576118b1612002565b60200260200101516118c287611139565b6118cc9190611f42565b965073ffffffffffffffffffffffffffffffffffffffff8616156118f0575f6118f2565b895b93508387111561190b5761190b868d610438878b611f42565b8d8d8281811061191d5761191d612002565b905060200281019061192f919061202f565b611940906060810190604001611f7a565b945061194b85611139565b925073ffffffffffffffffffffffffffffffffffffffff85161561196f575f611971565b895b915081831180156119ae57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156119c2576119c2858d6104388587611f42565b60010161180e565b5050505050505050505050505050565b610ca88383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a10565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611b375773ffffffffffffffffffffffffffffffffffffffff8316611a79576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611aec573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b10919061227f565b1015611b3757611b3773ffffffffffffffffffffffffffffffffffffffff85168483611b3d565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611514575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661151457633e3f8f735f526004601cfd5b5f60e08284031215611bcb575f5ffd5b50919050565b5f5f60408385031215611be2575f5ffd5b823567ffffffffffffffff811115611bf8575f5ffd5b83016101408186031215611c0a575f5ffd5b9150602083013567ffffffffffffffff811115611c25575f5ffd5b611c3185828601611bbb565b9150509250929050565b5f60208284031215611c4b575f5ffd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ca357611ca3611c52565b60405290565b5f82601f830112611cb8575f5ffd5b813567ffffffffffffffff811115611cd257611cd2611c52565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611d1f57611d1f611c52565b604052818152838201602001851015611d36575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d75575f5ffd5b919050565b80358015158114611d75575f5ffd5b5f6101408284031215611d9a575f5ffd5b611da2611c7f565b823581529050602082013567ffffffffffffffff811115611dc1575f5ffd5b611dcd84828501611ca9565b602083015250604082013567ffffffffffffffff811115611dec575f5ffd5b611df884828501611ca9565b604083015250611e0a60608301611d52565b6060820152611e1b60808301611d52565b6080820152611e2c60a08301611d52565b60a082015260c0828101359082015260e08083013590820152611e526101008301611d7a565b610100820152611e656101208301611d7a565b61012082015292915050565b5f5f5f5f60608587031215611e84575f5ffd5b843567ffffffffffffffff811115611e9a575f5ffd5b611ea687828801611d89565b945050602085013567ffffffffffffffff811115611ec2575f5ffd5b8501601f81018713611ed2575f5ffd5b803567ffffffffffffffff811115611ee8575f5ffd5b8760208260051b8401011115611efc575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611f1f575f5ffd5b611f2b87828801611bbb565b91505092959194509250565b5f61117d3683611d89565b8181038181111561117d577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611f8a575f5ffd5b611f9382611d52565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fcd575f5ffd5b83018035915067ffffffffffffffff821115611fe7575f5ffd5b602001915036819003821315611ffb575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612061575f5ffd5b9190910192915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526120de61016084018261206b565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152612119828261206b565b9150506060840151612143608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516121b261012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156121da575f5ffd5b611f9382611d7a565b5f5f858511156121f1575f5ffd5b838611156121fd575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612269577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561228f575f5ffd5b505191905056fea2646970667358221220ec6eae482c4f8ee15df7746f351aa7b3ef39f1bb2d8c8a093bfceb728e8d964a64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isQuoteConsumed";
        readonly inputs: readonly [{
            readonly name: "_quoteId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "consumed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaNEARIntents";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_nearData";
            readonly type: "tuple";
            readonly internalType: "struct NEARIntentsFacet.NEARIntentsData";
            readonly components: readonly [{
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaNEARIntents";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_nearData";
            readonly type: "tuple";
            readonly internalType: "struct NEARIntentsFacet.NEARIntentsData";
            readonly components: readonly [{
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "NEARIntentsBridgeStarted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "quoteId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "depositAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSignature";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QuoteAlreadyConsumed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QuoteExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): NEARIntentsFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NEARIntentsFacet;
}
export {};
