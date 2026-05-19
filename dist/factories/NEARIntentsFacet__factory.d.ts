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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b506040516123ee3803806123ee833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b60805161234a6100a45f395f610ad9015261234a5ff3fe608060405260043610610033575f3560e01c80633110c7b9146100375780635cf8113b1461004c578063cc67a1aa1461005f575b5f5ffd5b61004a610045366004611e6e565b6100c0565b005b61004a61005a366004611f34565b61045e565b34801561006a575f5ffd5b506100ac610079366004611f9e565b5f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e602052604090205460ff1690565b604051901515815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161013b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815584825f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6040808401355f9081526020839052205490915060ff16156101b1576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81606001354211156101ef576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561022b57508135155b15610262576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f61026e3447611fb5565b9050898061010001516102ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a806101200151156102eb576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b61030e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610345576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610382576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103bf576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c98d8b6107e1565b5f6103de8e5f01518f60c001518f8f33610b64565b90508d60c00151811115610422575f8e60c00151826103fd9190611fb5565b90506104208f608001518d60a001602081019061041a9190611fed565b83610ca6565b505b61042c8e8c610cdb565b5047925050508181111561044e5761044e5f846104498585611fb5565b610ca6565b50505f9094555050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104d9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556104e68361200d565b825f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6040808401355f9081526020839052205490915060ff1615610557576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160600135421115610595576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480156105d157508135155b15610608576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6106143447611fb5565b905061061f8861200d565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610670576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036106ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106ea576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106f38961200d565b80610100015115610730576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107398a61200d565b80610120015115610776576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107886107828c61200d565b8b6107e1565b6107a561079b60a08d0160808e01611fed565b8c60c00135610ea6565b6107b76107b18c61200d565b8b610cdb565b5047915050818111156107d3576107d35f846104498585611fb5565b50505f909455505050505050565b60a08201515f9073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1146108385760a083015173ffffffffffffffffffffffffffffffffffffffff1661083b565b81355b835160c08501519192505f917f26e3f312476209e792e713eef13bd95c5da5292aba26e299c7d8e7c647d7903e91908461087b6040880160208901611fed565b60e0808a01516080808c015160408051602081019a909a52898101989098526060898101979097528882019590955273ffffffffffffffffffffffffffffffffffffffff93841660a089015260c088019190915291909216918501919091529086013561010084015290850135610120830152840135610140820152610160016040516020818303038152906040528051906020012090505f610a17604080518082018252601881527f4c492e4649204e45415220496e74656e7473204661636574000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fdf98a75ee2bb051a05361ac569745cad98c226712c281987cdb39642864489ae818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090505f610ad582610a9c60c0880188612018565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610f5a92505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b5c576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b5f82808203610b9f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610bad600185611fb5565b818110610bbc57610bbc612080565b9050602002810190610bce91906120ad565b610bdf906080810190606001611fed565b90505f610beb82610ffe565b905073ffffffffffffffffffffffffffffffffffffffff8216610c1557610c123482611fb5565b90505b5f610c208888611048565b9050610c2c8888611152565b610c398a898989856111be565b5f82610c4485610ffe565b610c4e9190611fb5565b905089811015610c98576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cd057610ccb8282611406565b505050565b610ccb838383611473565b604081810180355f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e60208181529390912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560808501519092610d5992610d4f918601611fed565b8560c00151610ca6565b610d696040830160208401611fed565b835160808086015160c08701516040805173ffffffffffffffffffffffffffffffffffffffff93841681526020810192909252606080890135838301528489013590830152949091169386013592917f58a66541dad6964200edd2115c2567d5b7d9d86a45b0df488d6506d2a41e248d910160405180910390a47311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610e6a5760e08301518351604051843581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610e999190612135565b60405180910390a1505050565b805f03610edf576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f385780341015610f34576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610f3473ffffffffffffffffffffffffffffffffffffffff83163330846114e1565b604051600190835f5260208301516040526040835103610fae57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610fd2565b6041835103610fce5760608301515f1a6020526040830151606052610fd2565b5f91505b6020600160805f855afa5191503d610ff157638baa579f5f526004601cfd5b5f60605260405292915050565b5f73ffffffffffffffffffffffffffffffffffffffff8216156110405761103b73ffffffffffffffffffffffffffffffffffffffff831630611539565b611042565b475b92915050565b6060815f8167ffffffffffffffff81111561106557611065611c39565b60405190808252806020026020018201604052801561108e578160200160208202803683370190505b5090505f5f5b83811015611147578686828181106110ae576110ae612080565b90506020028101906110c091906120ad565b6110d1906080810190606001611fed565b91506110dc82610ffe565b8382815181106110ee576110ee612080565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661113f573483828151811061112757611127612080565b6020026020010181815161113b9190611fb5565b9052505b600101611094565b509095945050505050565b5f5b81811015610ccb573683838381811061116f5761116f612080565b905060200281019061118191906120ad565b905061119360e0820160c08301612248565b156111b5576111b56111ab6060830160408401611fed565b8260800135610ea6565b50600101611154565b83838383825f80805b838110156113ea57368c8c838181106111e2576111e2612080565b90506020028101906111f491906120ad565b90506112036020820182611fed565b93506112156040820160208301611fed565b92506112b88461122860a0840184612018565b611236916004915f91612261565b61123f91612288565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806113a057506112ec6112d26060830160408401611fed565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561132557508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156113a0575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156113d7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113e18e8261156c565b506001016111c7565b505050506113fb848484845f6117df565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611453576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f3473ffffffffffffffffffffffffffffffffffffffff8316826119f6565b73ffffffffffffffffffffffffffffffffffffffff82166114c0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ccb73ffffffffffffffffffffffffffffffffffffffff84168383611a0f565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661152c57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61158461157c6020830183611fed565b6017903b1190565b6115ba576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115f9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61160d6112d26060850160408601611fed565b611617575f61161d565b82608001355b90505f6116386116336080860160608701611fed565b610ffe565b9050815f0361166e5761166e6116546060860160408701611fed565b6116646040870160208801611fed565b8660800135611a58565b5f8061167d6020870187611fed565b73ffffffffffffffffffffffffffffffffffffffff16846116a160a0890189612018565b6040516116af9291906122ee565b5f6040518083038185875af1925050503d805f81146116e9576040519150601f19603f3d011682016040523d82523d5f602084013e6116ee565b606091505b5091509150816117015761170181611a84565b5f6117156116336080890160608a01611fed565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861174660208a018a611fed565b61175660608b0160408c01611fed565b61176660808c0160608d01611fed565b8b608001358987116117785786611782565b6117828a88611fb5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826117ee600182611fb5565b8181106117fd576117fd612080565b905060200281019061180f91906120ad565b611820906080810190606001611fed565b90505f5f5f5f5f5f5f5b888110156119e65761183d60018a611fb5565b8110801561184c575088600114155b15611927578d8d8281811061186357611863612080565b905060200281019061187591906120ad565b611886906080810190606001611fed565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611927578a81815181106118cd576118cd612080565b60200260200101516118de87610ffe565b6118e89190611fb5565b965073ffffffffffffffffffffffffffffffffffffffff86161561190c575f61190e565b895b93508387111561192757611927868d610449878b611fb5565b8d8d8281811061193957611939612080565b905060200281019061194b91906120ad565b61195c906060810190604001611fed565b945061196785610ffe565b925073ffffffffffffffffffffffffffffffffffffffff85161561198b575f61198d565b895b915081831180156119ca57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156119de576119de858d6104498587611fb5565b60010161182a565b5050505050505050505050505050565b5f385f3884865af1610f345763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a4f576390b8ec185f526004601cfd5b5f603452505050565b610ccb8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a8e565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611bb55773ffffffffffffffffffffffffffffffffffffffff8316611af7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b6a573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b8e91906122fd565b1015611bb557611bb573ffffffffffffffffffffffffffffffffffffffff85168483611bbb565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a4f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611a4f57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611c8a57611c8a611c39565b60405290565b5f82601f830112611c9f575f5ffd5b813567ffffffffffffffff811115611cb957611cb9611c39565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611d0657611d06611c39565b604052818152838201602001851015611d1d575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d5c575f5ffd5b919050565b80358015158114611d5c575f5ffd5b5f6101408284031215611d81575f5ffd5b611d89611c66565b823581529050602082013567ffffffffffffffff811115611da8575f5ffd5b611db484828501611c90565b602083015250604082013567ffffffffffffffff811115611dd3575f5ffd5b611ddf84828501611c90565b604083015250611df160608301611d39565b6060820152611e0260808301611d39565b6080820152611e1360a08301611d39565b60a082015260c0828101359082015260e08083013590820152611e396101008301611d61565b610100820152611e4c6101208301611d61565b61012082015292915050565b5f60e08284031215611e68575f5ffd5b50919050565b5f5f5f5f60608587031215611e81575f5ffd5b843567ffffffffffffffff811115611e97575f5ffd5b611ea387828801611d70565b945050602085013567ffffffffffffffff811115611ebf575f5ffd5b8501601f81018713611ecf575f5ffd5b803567ffffffffffffffff811115611ee5575f5ffd5b8760208260051b8401011115611ef9575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611f1c575f5ffd5b611f2887828801611e58565b91505092959194509250565b5f5f60408385031215611f45575f5ffd5b823567ffffffffffffffff811115611f5b575f5ffd5b83016101408186031215611f6d575f5ffd5b9150602083013567ffffffffffffffff811115611f88575f5ffd5b611f9485828601611e58565b9150509250929050565b5f60208284031215611fae575f5ffd5b5035919050565b81810381811115611042577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611ffd575f5ffd5b61200682611d39565b9392505050565b5f6110423683611d70565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261204b575f5ffd5b83018035915067ffffffffffffffff821115612065575f5ffd5b602001915036819003821315612079575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120df575f5ffd5b9190910192915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261215c6101608401826120e9565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261219782826120e9565b91505060608401516121c1608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161223061012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612258575f5ffd5b61200682611d61565b5f5f8585111561226f575f5ffd5b8386111561227b575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156122e7577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561230d575f5ffd5b505191905056fea26469706673582212205348032b5f84666ba9303af8688d9e762c303d04cd095de9242f7fc8c485e36c64736f6c634300081d0033";
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
