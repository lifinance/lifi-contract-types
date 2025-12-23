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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b506040516123f13803806123f1833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b60805161234d6100a45f395f610ad9015261234d5ff3fe608060405260043610610033575f3560e01c80633110c7b9146100375780635cf8113b1461004c578063cc67a1aa1461005f575b5f5ffd5b61004a610045366004611e71565b6100c0565b005b61004a61005a366004611f37565b61045e565b34801561006a575f5ffd5b506100ac610079366004611fa1565b5f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e602052604090205460ff1690565b604051901515815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161013b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815584825f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6040808401355f9081526020839052205490915060ff16156101b1576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81606001354211156101ef576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561022b57508135155b15610262576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f61026e3447611fb8565b9050898061010001516102ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a806101200151156102eb576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b61030e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610345576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610382576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103bf576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c98d8b6107e1565b5f6103de8e5f01518f60c001518f8f33610b64565b90508d60c00151811115610422575f8e60c00151826103fd9190611fb8565b90506104208f608001518d60a001602081019061041a9190611ff0565b83610ca6565b505b61042c8e8c610cdb565b5047925050508181111561044e5761044e5f846104498585611fb8565b610ca6565b50505f9094555050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104d9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556104e683612010565b825f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6040808401355f9081526020839052205490915060ff1615610557576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160600135421115610595576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480156105d157508135155b15610608576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6106143447611fb8565b905061061f88612010565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610670576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036106ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106ea576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106f389612010565b80610100015115610730576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107398a612010565b80610120015115610776576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107886107828c612010565b8b6107e1565b6107a561079b60a08d0160808e01611ff0565b8c60c00135610ea6565b6107b76107b18c612010565b8b610cdb565b5047915050818111156107d3576107d35f846104498585611fb8565b50505f909455505050505050565b60a08201515f9073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1146108385760a083015173ffffffffffffffffffffffffffffffffffffffff1661083b565b81355b835160c08501519192505f917f26e3f312476209e792e713eef13bd95c5da5292aba26e299c7d8e7c647d7903e91908461087b6040880160208901611ff0565b60e0808a01516080808c015160408051602081019a909a52898101989098526060898101979097528882019590955273ffffffffffffffffffffffffffffffffffffffff93841660a089015260c088019190915291909216918501919091529086013561010084015290850135610120830152840135610140820152610160016040516020818303038152906040528051906020012090505f610a17604080518082018252601881527f4c492e4649204e45415220496e74656e7473204661636574000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fdf98a75ee2bb051a05361ac569745cad98c226712c281987cdb39642864489ae818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090505f610ad582610a9c60c088018861201b565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610f5a92505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b5c576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b5f82808203610b9f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610bad600185611fb8565b818110610bbc57610bbc612083565b9050602002810190610bce91906120b0565b610bdf906080810190606001611ff0565b90505f610beb82610ffe565b905073ffffffffffffffffffffffffffffffffffffffff8216610c1557610c123482611fb8565b90505b5f610c208888611048565b9050610c2c8888611152565b610c398a898989856111be565b5f82610c4485610ffe565b610c4e9190611fb8565b905089811015610c98576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cd057610ccb8282611409565b505050565b610ccb838383611476565b604081810180355f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e60208181529390912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560808501519092610d5992610d4f918601611ff0565b8560c00151610ca6565b610d696040830160208401611ff0565b835160808086015160c08701516040805173ffffffffffffffffffffffffffffffffffffffff93841681526020810192909252606080890135838301528489013590830152949091169386013592917f58a66541dad6964200edd2115c2567d5b7d9d86a45b0df488d6506d2a41e248d910160405180910390a47311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610e6a5760e08301518351604051843581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610e999190612138565b60405180910390a1505050565b805f03610edf576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f385780341015610f34576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610f3473ffffffffffffffffffffffffffffffffffffffff83163330846114e4565b604051600190835f5260208301516040526040835103610fae57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610fd2565b6041835103610fce5760608301515f1a6020526040830151606052610fd2565b5f91505b6020600160805f855afa5191503d610ff157638baa579f5f526004601cfd5b5f60605260405292915050565b5f73ffffffffffffffffffffffffffffffffffffffff8216156110405761103b73ffffffffffffffffffffffffffffffffffffffff83163061153c565b611042565b475b92915050565b6060815f8167ffffffffffffffff81111561106557611065611c3c565b60405190808252806020026020018201604052801561108e578160200160208202803683370190505b5090505f5f5b83811015611147578686828181106110ae576110ae612083565b90506020028101906110c091906120b0565b6110d1906080810190606001611ff0565b91506110dc82610ffe565b8382815181106110ee576110ee612083565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661113f573483828151811061112757611127612083565b6020026020010181815161113b9190611fb8565b9052505b600101611094565b509095945050505050565b5f5b81811015610ccb573683838381811061116f5761116f612083565b905060200281019061118191906120b0565b905061119360e0820160c0830161224b565b156111b5576111b56111ab6060830160408401611ff0565b8260800135610ea6565b50600101611154565b83838383825f5b818110156113ef57368a8a838181106111e0576111e0612083565b90506020028101906111f291906120b0565b90505f6112026020830183611ff0565b90505f6112156040840160208501611ff0565b90506112b88261122860a086018661201b565b611236916004915f91612264565b61123f9161228b565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806113a057506112ec6112d26060850160408601611ff0565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561132557508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156113a0575073ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156113d7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113e18e8461156f565b8360010193505050506111c5565b50506113fe848484845f6117e2565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611456576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f3473ffffffffffffffffffffffffffffffffffffffff8316826119f9565b73ffffffffffffffffffffffffffffffffffffffff82166114c3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ccb73ffffffffffffffffffffffffffffffffffffffff84168383611a12565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661152f57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61158761157f6020830183611ff0565b6017903b1190565b6115bd576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115fc576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116106112d26060850160408601611ff0565b61161a575f611620565b82608001355b90505f61163b6116366080860160608701611ff0565b610ffe565b9050815f03611671576116716116576060860160408701611ff0565b6116676040870160208801611ff0565b8660800135611a5b565b5f806116806020870187611ff0565b73ffffffffffffffffffffffffffffffffffffffff16846116a460a089018961201b565b6040516116b29291906122f1565b5f6040518083038185875af1925050503d805f81146116ec576040519150601f19603f3d011682016040523d82523d5f602084013e6116f1565b606091505b5091509150816117045761170481611a87565b5f6117186116366080890160608a01611ff0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861174960208a018a611ff0565b61175960608b0160408c01611ff0565b61176960808c0160608d01611ff0565b8b6080013589871161177b5786611785565b6117858a88611fb8565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826117f1600182611fb8565b81811061180057611800612083565b905060200281019061181291906120b0565b611823906080810190606001611ff0565b90505f5f5f5f5f5f5f5b888110156119e95761184060018a611fb8565b8110801561184f575088600114155b1561192a578d8d8281811061186657611866612083565b905060200281019061187891906120b0565b611889906080810190606001611ff0565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461192a578a81815181106118d0576118d0612083565b60200260200101516118e187610ffe565b6118eb9190611fb8565b965073ffffffffffffffffffffffffffffffffffffffff86161561190f575f611911565b895b93508387111561192a5761192a868d610449878b611fb8565b8d8d8281811061193c5761193c612083565b905060200281019061194e91906120b0565b61195f906060810190604001611ff0565b945061196a85610ffe565b925073ffffffffffffffffffffffffffffffffffffffff85161561198e575f611990565b895b915081831180156119cd57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156119e1576119e1858d6104498587611fb8565b60010161182d565b5050505050505050505050505050565b5f385f3884865af1610f345763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a52576390b8ec185f526004601cfd5b5f603452505050565b610ccb8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a91565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611bb85773ffffffffffffffffffffffffffffffffffffffff8316611afa576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b6d573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b919190612300565b1015611bb857611bb873ffffffffffffffffffffffffffffffffffffffff85168483611bbe565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a52575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611a5257633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611c8d57611c8d611c3c565b60405290565b5f82601f830112611ca2575f5ffd5b813567ffffffffffffffff811115611cbc57611cbc611c3c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611d0957611d09611c3c565b604052818152838201602001851015611d20575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d5f575f5ffd5b919050565b80358015158114611d5f575f5ffd5b5f6101408284031215611d84575f5ffd5b611d8c611c69565b823581529050602082013567ffffffffffffffff811115611dab575f5ffd5b611db784828501611c93565b602083015250604082013567ffffffffffffffff811115611dd6575f5ffd5b611de284828501611c93565b604083015250611df460608301611d3c565b6060820152611e0560808301611d3c565b6080820152611e1660a08301611d3c565b60a082015260c0828101359082015260e08083013590820152611e3c6101008301611d64565b610100820152611e4f6101208301611d64565b61012082015292915050565b5f60e08284031215611e6b575f5ffd5b50919050565b5f5f5f5f60608587031215611e84575f5ffd5b843567ffffffffffffffff811115611e9a575f5ffd5b611ea687828801611d73565b945050602085013567ffffffffffffffff811115611ec2575f5ffd5b8501601f81018713611ed2575f5ffd5b803567ffffffffffffffff811115611ee8575f5ffd5b8760208260051b8401011115611efc575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611f1f575f5ffd5b611f2b87828801611e5b565b91505092959194509250565b5f5f60408385031215611f48575f5ffd5b823567ffffffffffffffff811115611f5e575f5ffd5b83016101408186031215611f70575f5ffd5b9150602083013567ffffffffffffffff811115611f8b575f5ffd5b611f9785828601611e5b565b9150509250929050565b5f60208284031215611fb1575f5ffd5b5035919050565b81810381811115611042577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215612000575f5ffd5b61200982611d3c565b9392505050565b5f6110423683611d73565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261204e575f5ffd5b83018035915067ffffffffffffffff821115612068575f5ffd5b60200191503681900382131561207c575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120e2575f5ffd5b9190910192915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261215f6101608401826120ec565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261219a82826120ec565b91505060608401516121c4608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161223361012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561225b575f5ffd5b61200982611d64565b5f5f85851115612272575f5ffd5b8386111561227e575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156122ea577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612310575f5ffd5b505191905056fea264697066735822122024d7a27da3ae5b3c904bd298003d9d9ab94d75e1e2eacceb719c31b3709a1d9e64736f6c634300081d0033";
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
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
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
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
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
        }, {
            readonly name: "minAmountOut";
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
