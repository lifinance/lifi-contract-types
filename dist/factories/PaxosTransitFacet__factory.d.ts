import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PaxosTransitFacet, PaxosTransitFacetInterface } from "../PaxosTransitFacet";
type PaxosTransitFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PaxosTransitFacet__factory extends ContractFactory {
    constructor(...args: PaxosTransitFacetConstructorParams);
    deploy(_transitStation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PaxosTransitFacet>;
    getDeployTransaction(_transitStation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PaxosTransitFacet;
    connect(signer: Signer): PaxosTransitFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516121d23803806121d283398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b60805161211a6100b85f395f818160c1015281816109a601526109e6015261211a5ff3fe60806040526004361061003e575f3560e01c80630ad0587c146100425780635080ffe214610088578063637f1d041461009d578063c3c7a5be146100b0575b5f5ffd5b34801561004d575f5ffd5b506100757f4c4946490000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b61009b610096366004611b0a565b610108565b005b61009b6100ab366004611b6f565b610479565b3480156100bb575f5ffd5b506100e37f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161007f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610183576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556101996101c083016101a08401611c35565b5f6101a43447611c55565b9050846101c98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610200576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361023d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361027a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156102b8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156102f6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87610319816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610350576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6103636101c08a016101a08b01611c35565b73ffffffffffffffffffffffffffffffffffffffff16036103b0576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08901516060890135146103f1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b348861018001351115610430576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61044289608001518a60c001516107f3565b61044c89896108a7565b5047925050508181111561046e5761046e5f846104698585611c55565b610abc565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561050a6101c083016101a08401611c35565b5f6105153447611c55565b905086806101000151610554576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610592576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886105b58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105ec576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610629576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610666576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610689816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156106c0576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6106d36101c08a016101a08b01611c35565b73ffffffffffffffffffffffffffffffffffffffff1603610720576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08b01516060890135908114610763576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61078d8d5f0151838e8e8e6101a00160208101906107829190611c35565b8f6101800135610af1565b9050818111156107bc5760808d01516107bc906107b26101c08d016101a08e01611c35565b6104698585611c55565b6107c68d8b6108a7565b504794505050508282111590506107e6576107e65f846104698585611c55565b50505f9091555050505050565b805f0361082c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108855780341015610881576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61088173ffffffffffffffffffffffffffffffffffffffff8316333084610c8b565b806108b86040820160208301611c35565b73ffffffffffffffffffffffffffffffffffffffff16836080015173ffffffffffffffffffffffffffffffffffffffff16141580610935575061090160a0820160808301611c35565b73ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614155b8061096557506101008101357f4c4946490000000000000000000000000000000000000000000000000000000014155b1561099c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109cf83608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610ce3565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016633784896a61018084013583610a20610160870187611c8d565b6040518563ffffffff1660e01b8152600401610a3e93929190611d3c565b60206040518083038185885af1158015610a5a573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610a7f9190611e50565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610aaf9190611eb3565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ae657610ae18282610d0f565b505050565b610ae1838383610d7c565b5f83808203610b2c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610b3a600185611c55565b818110610b4957610b49611fc6565b9050602002810190610b5b9190611ff3565b610b6c906080810190606001611c35565b90505f610b7882610dea565b905073ffffffffffffffffffffffffffffffffffffffff8216610ba257610b9f3482611c55565b90505b5f610bad8989610e34565b9050610bb98989610f3e565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610bf4818b8b85610faa565b5f83610bff86610dea565b610c099190611c55565b905073ffffffffffffffffffffffffffffffffffffffff8516610c3357610c308882611c55565b90505b8b811015610c7b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610cd657637939f4245f526004601cfd5b5f60605260405250505050565b610ae18383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611200565b73ffffffffffffffffffffffffffffffffffffffff8216610d5c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61088173ffffffffffffffffffffffffffffffffffffffff83168261132d565b73ffffffffffffffffffffffffffffffffffffffff8216610dc9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ae173ffffffffffffffffffffffffffffffffffffffff84168383611346565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e2c57610e2773ffffffffffffffffffffffffffffffffffffffff83163061138f565b610e2e565b475b92915050565b6060815f8167ffffffffffffffff811115610e5157610e516118d4565b604051908082528060200260200182016040528015610e7a578160200160208202803683370190505b5090505f5f5b83811015610f3357868682818110610e9a57610e9a611fc6565b9050602002810190610eac9190611ff3565b610ebd906080810190606001611c35565b9150610ec882610dea565b838281518110610eda57610eda611fc6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f2b5734838281518110610f1357610f13611fc6565b60200260200101818151610f279190611c55565b9052505b600101610e80565b509095945050505050565b5f5b81811015610ae15736838383818110610f5b57610f5b611fc6565b9050602002810190610f6d9190611ff3565b9050610f7f60e0820160c0830161202f565b15610fa157610fa1610f976060830160408401611c35565b82608001356107f3565b50600101610f40565b60208401516040850151849184918490835f80805b838110156111e457368c8c83818110610fda57610fda611fc6565b9050602002810190610fec9190611ff3565b9050610ffb6020820182611c35565b935061100d6040820160208301611c35565b92506110b08461102060a0840184611c8d565b61102e916004915f91612048565b6110379161206f565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061119857506110e46110ca6060830160408401611c35565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561111d57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611198575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156111cf576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d516111db90826113c2565b50600101610fbf565b505050506111f58585858585611635565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156113275773ffffffffffffffffffffffffffffffffffffffff8316611269576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156112dc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113009190611e50565b10156113275761132773ffffffffffffffffffffffffffffffffffffffff8516848361184c565b50505050565b5f385f3884865af16108815763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611386576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6113da6113d26020830183611c35565b6017903b1190565b611410576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361144f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114636110ca6060850160408601611c35565b61146d575f611473565b82608001355b90505f61148e6114896080860160608701611c35565b610dea565b9050815f036114c4576114c46114aa6060860160408701611c35565b6114ba6040870160208801611c35565b8660800135610ce3565b5f806114d36020870187611c35565b73ffffffffffffffffffffffffffffffffffffffff16846114f760a0890189611c8d565b6040516115059291906120d5565b5f6040518083038185875af1925050503d805f811461153f576040519150601f19603f3d011682016040523d82523d5f602084013e611544565b606091505b50915091508161155757611557816118ca565b5f61156b6114896080890160608a01611c35565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861159c60208a018a611c35565b6115ac60608b0160408c01611c35565b6115bc60808c0160608d01611c35565b8b608001358987116115ce57866115d8565b6115d88a88611c55565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611644600182611c55565b81811061165357611653611fc6565b90506020028101906116659190611ff3565b611676906080810190606001611c35565b90505f5f5f5f5f5f5f5b8881101561183c5761169360018a611c55565b811080156116a2575088600114155b1561177d578d8d828181106116b9576116b9611fc6565b90506020028101906116cb9190611ff3565b6116dc906080810190606001611c35565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461177d578a818151811061172357611723611fc6565b602002602001015161173487610dea565b61173e9190611c55565b965073ffffffffffffffffffffffffffffffffffffffff861615611762575f611764565b895b93508387111561177d5761177d868d610469878b611c55565b8d8d8281811061178f5761178f611fc6565b90506020028101906117a19190611ff3565b6117b2906060810190604001611c35565b94506117bd85610dea565b925073ffffffffffffffffffffffffffffffffffffffff8516156117e1575f6117e3565b895b9150818311801561182057508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561183457611834858d6104698587611c55565b600101611680565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611386575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661138657633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611925576119256118d4565b60405290565b5f82601f83011261193a575f5ffd5b813567ffffffffffffffff811115611954576119546118d4565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156119a1576119a16118d4565b6040528181528382016020018510156119b8575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146119f7575f5ffd5b919050565b803580151581146119f7575f5ffd5b5f6101408284031215611a1c575f5ffd5b611a24611901565b823581529050602082013567ffffffffffffffff811115611a43575f5ffd5b611a4f8482850161192b565b602083015250604082013567ffffffffffffffff811115611a6e575f5ffd5b611a7a8482850161192b565b604083015250611a8c606083016119d4565b6060820152611a9d608083016119d4565b6080820152611aae60a083016119d4565b60a082015260c0828101359082015260e08083013590820152611ad461010083016119fc565b610100820152611ae761012083016119fc565b61012082015292915050565b5f6101c08284031215611b04575f5ffd5b50919050565b5f5f60408385031215611b1b575f5ffd5b823567ffffffffffffffff811115611b31575f5ffd5b611b3d85828601611a0b565b925050602083013567ffffffffffffffff811115611b59575f5ffd5b611b6585828601611af3565b9150509250929050565b5f5f5f5f60608587031215611b82575f5ffd5b843567ffffffffffffffff811115611b98575f5ffd5b611ba487828801611a0b565b945050602085013567ffffffffffffffff811115611bc0575f5ffd5b8501601f81018713611bd0575f5ffd5b803567ffffffffffffffff811115611be6575f5ffd5b8760208260051b8401011115611bfa575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c1d575f5ffd5b611c2987828801611af3565b91505092959194509250565b5f60208284031215611c45575f5ffd5b611c4e826119d4565b9392505050565b81810381811115610e2e577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611cc0575f5ffd5b83018035915067ffffffffffffffff821115611cda575f5ffd5b602001915036819003821315611cee575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f843563ffffffff8116808214611d51575f5ffd5b83525073ffffffffffffffffffffffffffffffffffffffff611d75602087016119d4565b16602083015273ffffffffffffffffffffffffffffffffffffffff611d9c604087016119d4565b16604083015260608581013590830152611db8608086016119d4565b73ffffffffffffffffffffffffffffffffffffffff16608083015260a0858101359083015260c08086013590830152611df360e086016119d4565b73ffffffffffffffffffffffffffffffffffffffff1660e08301526101008581013590830152610120808601359083015261014080860135908301526101806101608301819052611e479083018486611cf5565b95945050505050565b5f60208284031215611e60575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611eda610160840182611e67565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611f158282611e67565b9150506060840151611f3f608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611fae61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612025575f5ffd5b9190910192915050565b5f6020828403121561203f575f5ffd5b611c4e826119fc565b5f5f85851115612056575f5ffd5b83861115612062575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156120ce577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea26469706673582212203d029be78466a3362f9207ca808a23131be5f4b7eea5310afe03e96deb5aac7864736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_transitStation";
            readonly type: "address";
            readonly internalType: "contract IPaxosTransit";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_DISTRIBUTOR_CODE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "TRANSIT_STATION";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPaxosTransit";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPaxosTransit";
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
            readonly name: "_paxosData";
            readonly type: "tuple";
            readonly internalType: "struct PaxosTransitFacet.PaxosTransitData";
            readonly components: readonly [{
                readonly name: "quote";
                readonly type: "tuple";
                readonly internalType: "struct IPaxosTransit.Quote";
                readonly components: readonly [{
                    readonly name: "route";
                    readonly type: "tuple";
                    readonly internalType: "struct IPaxosTransit.Route";
                    readonly components: readonly [{
                        readonly name: "destEID";
                        readonly type: "uint32";
                        readonly internalType: "uint32";
                    }, {
                        readonly name: "offerAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "wantAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }];
                }, {
                    readonly name: "offerAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "protocolFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFeeReceiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "distributorCode";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "salt";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPaxosTransit";
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
            readonly name: "_paxosData";
            readonly type: "tuple";
            readonly internalType: "struct PaxosTransitFacet.PaxosTransitData";
            readonly components: readonly [{
                readonly name: "quote";
                readonly type: "tuple";
                readonly internalType: "struct IPaxosTransit.Quote";
                readonly components: readonly [{
                    readonly name: "route";
                    readonly type: "tuple";
                    readonly internalType: "struct IPaxosTransit.Route";
                    readonly components: readonly [{
                        readonly name: "destEID";
                        readonly type: "uint32";
                        readonly internalType: "uint32";
                    }, {
                        readonly name: "offerAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "wantAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }];
                }, {
                    readonly name: "offerAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "protocolFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFeeReceiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "distributorCode";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "salt";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
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
        readonly name: "InvalidCallData";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): PaxosTransitFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PaxosTransitFacet;
}
export {};
